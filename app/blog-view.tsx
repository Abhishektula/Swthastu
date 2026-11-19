import Image from 'next/image';
import Link from 'next/link';
import posts from './blog-posts.json';
import './styles/blog.css';

type Story = typeof posts[number];

function StoryCard({story, cover}: {story: Story; cover: boolean}) {
  return (
    <article className={cover ? 'blog-cover' : 'blog-brief'}>
      <Link href={'/blog/' + story.slug} aria-labelledby={'title-' + story.slug}>
        <Image src={story.image} width={680} height={420} alt="" loading={cover ? 'eager' : 'lazy'} />
        <div className="blog-caption">
          <span className="blog-topic">{story.category}</span>
          <h2 id={'title-' + story.slug}>{story.title}</h2>
          <p>{story.description}</p>
        </div>
      </Link>
    </article>
  );
}

export default function BlogView({path}: {path: string}) {
  const post = posts.find(item => path === '/blog/' + item.slug);
  if (post) return (
    <div className="blog-page">
      <Link className="blog-back" href="/blog">← All blog posts</Link>
      <article className="blog-reading">
        <div className="blog-opening">
          <div>
            <span className="blog-topic">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <Image src={post.image} width={640} height={400} alt="" />
        </div>
        <div className="blog-copy">
          <p className="blog-intro">{post.intro}</p>
          {post.sections.map(section => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </article>
      <aside className="blog-related" aria-labelledby="more-guides">
        <h2 id="more-guides">More from the blog</h2>
        <ul>{posts.filter(item => item !== post).map(item => (
          <li key={item.slug}><Link href={'/blog/' + item.slug}>{item.title}</Link></li>
        ))}</ul>
      </aside>
    </div>
  );
  return (
    <section className="blog-page blog-index">
      <div className="blog-masthead">
        <h1>The Swthastu <em>blog</em></h1>
        <p>Practical guides for the moments between retreats, from closing your laptop to checking in on a friend.</p>
      </div>
      <div className="blog-grid">{posts.map((story, index) => (
        <StoryCard key={story.slug} story={story} cover={index === 0} />
      ))}</div>
    </section>
  );
}
