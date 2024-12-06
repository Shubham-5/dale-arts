export default function ArtistSidebar() {
  const artists = [
    {
      name: "Jessica Williams",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Jessica+Williams",
      username: "@jessicaw",
    },
    {
      name: "Jessica Williams",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Jessica+Williams",
      username: "@jessicaw",
    },
    {
      name: "Jessica Williams",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Jessica+Williams",
      username: "@jessicaw",
    },
    {
      name: "Jessica Williams",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Jessica+Williams",
      username: "@jessicaw",
    },
    {
      name: "Chris Doe",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Chris+Doe",
      username: "@chrisdoe",
    },
    {
      name: "Sandra James",
      background: "https://placehold.co/600x400.png",
      avatar: "https://ui-avatars.com/api/?name=Sandra+James",
      username: "@sandra",
    },
  ];

  return (
    <aside className="w-60 hidden lg:block max-h-screen">
      <button className="bg-sidebarActiveBorder hover:bg-sidebarActiveBorder/80 text-white h-20 rounded-lg py-4 px-6 w-full text-center">
        Become a Seller
      </button>
      <div className="flex items-center gap-x-4  mt-8 mb-4">
        <button className="font-semibold">Artists</button>
        <button className="text-gray-400">Photographers</button>
      </div>
      <div className="space-y-4 lg:max-h-[33rem]  overflow-y-auto">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="flex items-center gap-3 relative text-white"
          >
            <img
              src={artist.background}
              alt={artist.name}
              className="rounded-lg object-cover h-32 w-full"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute z-10 bottom-5 left-5 flex items-center gap-x-3">
              <img
                src={artist.avatar}
                alt={artist.name}
                width={40}
                height={40}
                className="rounded-lg border-2 border-white"
              />
              <div>
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-sm ">{artist.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 my-3 flex justify-evenly">
        <span>Privacy</span>
        <span>Terms of Services</span>
        <span>Cookie Notice</span>
      </p>
    </aside>
  );
}
