import React, { useState, useRef, useEffect } from "react";
import { Markmap } from "markmap-view";
import { transformer } from "./markmap";
import { Toolbar } from "markmap-toolbar";
import "markmap-toolbar/dist/style.css";

const defaultStyle = {
  minHeight: "50vh",
  backgroundColor: "#f1f1f1",
};

const FULL_SVG = "M16 4h-12v12h12v-8h-8v4h2v-2h4v4h-8v-8h10z";

export default function MindMap({ markdown }) {
  const [value] = useState(markdown);
  const [style, setStyle] = useState(defaultStyle);

  const refSvg = useRef();
  const refMm = useRef();
  const refToolbar = useRef();

  const renderToolbar = (mm, wrapper) => {
    while (wrapper?.firstChild) {
      wrapper.firstChild.remove();
    }

    if (mm && wrapper) {
      const toolbar = new Toolbar();
      toolbar.attach(mm);

      toolbar.register({
        id: "full",
        title: "full screen",
        content: Toolbar.icon(FULL_SVG),
        onClick: () => {
          const asideEl =
            document.getElementsByClassName("rspress-sidebar")?.[0];

          if (!asideEl) {
            return;
          }

          if (refSvg.current.style.position === "fixed") {
            setStyle(defaultStyle);
            asideEl.style.display = "block";
            return;
          }

          setStyle({
            position: "fixed",
            zIndex: 1,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "calc(100vh - var(--rp-nav-height))",
            backgroundColor: "#f1f1f1",
          });
          asideEl.style.display = "none";
        },
      });

      toolbar.setItems(["zoomIn", "zoomOut", "fit", "full"]);
      wrapper.append(toolbar.render());
    }
  };

  useEffect(() => {
    if (refMm.current) {
      return;
    }
    const mm = Markmap.create(refSvg.current);
    refMm.current = mm;
    renderToolbar(refMm.current, refToolbar.current);
  }, [refSvg.current]);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) {
      return;
    }
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);

  useEffect(() => {
    const mm = refMm.current;
    if (!mm) {
      return;
    }
    mm.fit();
  }, [style]);

  return (
    <React.Fragment>
      <div className="relative" style={style}>
        <svg className="w-full h-full" ref={refSvg} style={style}></svg>
        <div className="absolute bottom-0 right-0 z-10" ref={refToolbar}></div>
      </div>
    </React.Fragment>
  );
}
