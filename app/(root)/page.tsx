import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Dany' },
    _id: 1,
    description: `This is description`,
    image: 'https://plus.unsplash.com/premium_photo-1734275012690-6d3006fba036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    category: 'Building',
    title: 'New York Building'
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className='heading'>Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post._id} post={post} />
          ))
          ) : (
            <p className="no-results">No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
