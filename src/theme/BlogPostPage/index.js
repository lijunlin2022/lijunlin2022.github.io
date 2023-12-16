import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
import Unlisted from '@theme/Unlisted';
function BlogPostPageContent({sidebar, children}) {
  const {metadata, toc} = useBlogPost();
  const commentElement = useRef(null);
  const {nextItem, prevItem, frontMatter, unlisted} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  useEffect(() => {
    const blogIndex = window.location.href.indexOf('blog');
    const theme = document.documentElement.getAttribute('data-theme');
    if (commentElement.current && blogIndex > 0) {
      const issueTerm = window.location.href.slice(blogIndex);
      let s = document.createElement("script");
      s.src = "https://utteranc.es/client.js";
      s.setAttribute("repo", "lijunlin2022/blog-issues");
      s.setAttribute("theme", theme === 'light' ? 'github-light' : 'github-dark-orange');
      s.setAttribute("issue-term", issueTerm);
      s.setAttribute("crossorigin", "anonymous");
      s.async = true;
      commentElement.current.appendChild(s);
    }
  }, [commentElement]);

  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      {unlisted && <Unlisted />}
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}

      <div ref={commentElement}></div>
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
