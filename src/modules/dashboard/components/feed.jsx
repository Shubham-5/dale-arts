import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Lora Leones",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      image: "/placeholder.svg?height=400&width=600",
      likes: "9.8k",
      comments: "8.4k",
      shares: "7.2k",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 2,
      author: {
        name: "Thomas J.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      image: "/placeholder.svg?height=400&width=600",
      likes: "9.8k",
      comments: "8.4k",
      shares: "7.2k",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <button size="icon">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <img
            src={post.image}
            alt="Post image"
            width={600}
            height={400}
            className="w-full"
          />
          <div className="p-4">
            <p className="text-gray-600 mb-4">{post.text}</p>
            <div className="flex items-center gap-6">
              <button className="gap-2">
                <Heart className="h-5 w-5" />
                {post.likes}
              </button>
              <button className="gap-2">
                <MessageCircle className="h-5 w-5" />
                {post.comments}
              </button>
              <button className="gap-2">
                <Share2 className="h-5 w-5" />
                {post.shares}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
