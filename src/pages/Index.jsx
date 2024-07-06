import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <Textarea placeholder="What's happening?" className="mb-2" />
        <Button>Tweet</Button>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((tweet) => (
          <Tweet key={tweet} />
        ))}
      </div>
    </div>
  );
};

const Tweet = () => (
  <div className="border rounded-lg p-4">
    <div className="flex items-start space-x-4">
      <Avatar>
        <AvatarImage src="/placeholder.svg" alt="@username" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold">User Name</h3>
          <span className="text-sm text-muted-foreground">@username</span>
        </div>
        <p className="mt-2">This is a sample tweet content. It can be much longer and contain multiple lines of text.</p>
        <div className="flex items-center space-x-4 mt-4">
          <Button variant="ghost" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="ghost" size="sm">
            <Repeat className="h-4 w-4 mr-2" />
            Retweet
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Index;