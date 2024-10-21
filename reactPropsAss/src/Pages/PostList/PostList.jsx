import BlogPost from "../../Components/BlogPost/BlogPost";
import "./PostList.css";

function PostList() {
  return (
    <>
      <div className="postFlex">
        <BlogPost
          title="Bandits k!ll two travelers, abduct Zamfara revenue commission coordinator and others"
          author="Lindaikeji Blog"
          content="Bandits have killed two travelers and abducted the Zamfara State Coordinator of the Revenue Mobilisation Allocation and Fiscal Commission (RMAFC), Alhaji Bashir Abara Gummi alongside several others along the Funtua-Gusau Road."
          date="21st October, 2024."
        />

        <BlogPost
          title="Celebs Turn Heads in Stylish Looks at Toke Makinwa’s Thanksgiving Soirée"
          author="Bellanaija Blog"
          content="With her 40th birthday fast approaching, media personality Toke Makinwa hosted an intimate yet grand thanksgiving celebration yesterday, kicking off the countdown in true Toke style. Surrounded by family, close friends, and some of the biggest names in the entertainment industry, the event was a perfect blend of heartfelt gratitude and high fashion."
          date="21st October,2024."
        />

        <BlogPost
          title="Guests Stunned in All-White Elegance for The Petersons’ #HeavenOnEarth2024 Grand Finale"
          author="Bellanaija Blog"
          content="The latest couple in town, Okopi Peterson and Prudent Gabriel have been on a beautiful celebration of love since the beginning of their wedding festivities. From their chic civil wedding to the stunning pre-wedding photoshoot, from Prudent’s glamorous bridal shower to the elegant introduction ceremony, every moment has been a celebration of love and style."
          date="20th October, 2024."
        />

        <BlogPost
          title="Current insecurity worse than during my government – Obasanjo"
          author="Lindaikeji Blog"
          content="Former President Olusegun Obasanjo has expressed deep concern over the worsening insecurity in Nigeria, urging swift action to address the situation. "
          date="21st October, 2024."
        />

        <BlogPost
          title="There's still hope for the singles as Nkechi and Tonye met at an House Party."
          author="Bellanaija Blog"
          content="Nkechi and Toye’s meet-cute has evolved into a perfect fairy tale, and we are so pumped! To seal their love forever, they had a beautiful white wedding ceremony with their family and friends present to share in their joy. They tied the knot in a vibrant traditional wedding, representing their Igbo and Yoruba roots to the fullest. Nkechi looked breathtaking and Toye was dashing in his outfit. Together, they made a picture-perfect couple, and the atmosphere was filled with love, laughter, and the promise of forever."
          date="21st October, 2024."
        />
      </div>
    </>
  );
}
export default PostList;
