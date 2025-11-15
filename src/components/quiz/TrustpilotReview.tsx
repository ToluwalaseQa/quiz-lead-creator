import { Star } from "lucide-react";

interface TrustpilotReviewProps {
  text: string;
  author: string;
  image?: string;
}

export const TrustpilotReview = ({ text, author, image }: TrustpilotReviewProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-left">
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-3 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        {image && (
          <img 
            src={image} 
            alt={`${author} profile`} 
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <p className="text-xs font-medium text-foreground">{author}</p>
      </div>
    </div>
  );
};
