import Image from 'next/image';
import Link from 'next/link';
import posts from './blog-posts.json';
import './styles/blog.css';

export default function BlogView({path}: {path: string}) {
  const post = posts.find(item => path === '/blog/' + item.slug);
  if (post) return (
    <article className="blog-reading">
      <Link href="/blog">All blog posts</Link>
      <p className="blog-topic">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="blog-lead">{post.intro}</p>
      {post.sections.map(section => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <Link href="/blog">Browse more wellbeing guides</Link>
    </article>
  );
  return (
    <section className="blog-index">
      <h1>The Swthastu blog</h1>
      <p className="blog-lead">Practical guides for the moments between retreats, from closing your laptop to checking in on a friend.</p>
      <div className="blog-grid">{posts.map((item, index) => (
        <article key={item.slug}>
          <Link href={'/blog/' + item.slug} aria-labelledby={'title-' + item.slug}>
            <Image src={item.image} width={640} height={360} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
            <p className="blog-topic">{item.category}</p>
            <h2 id={'title-' + item.slug}>{item.title}</h2>
          </Link>
          <p>{item.description}</p>
        </article>
      ))}</div>
    </section>
  );
}
