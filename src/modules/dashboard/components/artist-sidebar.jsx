export default function ArtistSidebar() {
  const artists = [
    {
      name: "Jessica Williams",
      photo: "/placeholder.svg?height=40&width=40",
      type: "Street Artist",
    },
    {
      name: "Chris Doe",
      photo: "/placeholder.svg?height=40&width=40",
      type: "Photographer",
    },
    {
      name: "Sandra James",
      photo: "/placeholder.svg?height=40&width=40",
      type: "Digital Artist",
    },
  ];

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-72 border-l bg-white p-4 hidden lg:block">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Artists</h2>
        <button>Photographers</button>
      </div>
      <div className="space-y-4">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
          >
            <img
              src={artist.photo}
              alt={artist.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium">{artist.name}</h3>
              <p className="text-sm text-gray-500">{artist.type}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
