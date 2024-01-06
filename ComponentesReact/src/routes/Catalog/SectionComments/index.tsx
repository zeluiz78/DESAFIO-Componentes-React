import CommentCard from "../../../components/CommentCard";
import "./styles.css";

export default function SectionComments() {
  return (
    <section id="section-comments">
      <h2 className="section-title">O que estão dizendo</h2>
      <div className="dsct-cards-ctr">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </section>
  );
}
