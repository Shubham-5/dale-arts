import {
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Lora Leones",
        username: "@loraLeons",
        avatar: "https://ui-avatars.com/api/?name=Lora+Leons",
      },
      image: "https://ui-avatars.com/api/?name=Lora+Leons",
      likes: "9.8k",
      comments: "8.4k",
      shares: "7.2k",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 2,
      author: {
        name: "Thomas J.",
        username: "@thomasj",
        avatar:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      },
      image:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      likes: "9.8k",
      comments: "8.4k",
      shares: "7.2k",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <div>
      <div className="bg-white h-20 flex items-center px-6 gap-x-4 rounded-lg shadow-sm mb-8">
        <div className="relative hidden md:block flex-1">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
          <input placeholder="Search here..." className="w-full pl-9 h-10" />
        </div>

        <div className="flex items-center gap-x-3 text-sm">
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6 h-dvh overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{post.author.name}</span>
                  <span className="text-sm text-gray-400">
                    {post.author.username}
                  </span>
                </div>
              </div>
              <button size="icon">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-800 leading-tight px-4">{post.text}</p>
            <div className="p-4 relative">
              <img
                src={post.image}
                alt="Post image"
                className="w-full h-64 object-cover rounded-lg"
              />

              <Heart
                size={20}
                className="absolute top-10 right-10 text-white"
              />
            </div>

            <div className="px-4 py-6 border-t">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  {post.shares}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
