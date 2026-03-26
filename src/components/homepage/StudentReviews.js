import connectDB from "@/lib/db";
import Review from "@/models/Review";
import ReviewsUI from "./ReviewsUI";

async function getReviews() {
  try {
    await connectDB();
    const reviews = await Review.find({}).sort({ createdAt: -1 }).limit(10).lean();
    
    return reviews.map((review) => ({
      ...review,
      _id: review._id.toString(),
      createdAt: review.createdAt ? review.createdAt.toString() : null,
      updatedAt: review.updatedAt ? review.updatedAt.toString() : null,
    }));
  } catch (error) {
    console.error("Database Connection Failed (Reviews):", error.message);
    return []; 
  }
}

export default async function StudentReviews() {
  const reviews = await getReviews();

  return (
    <section className="relative z-30 py-12 md:py-24 overflow-hidden bg-gray-50">
      
      {/* Light Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/4 md:left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-blue-200/40 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-4">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 border border-blue-200 rounded-full bg-blue-50 backdrop-blur-md mb-4 md:mb-6 shadow-sm">
                <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Community Feedback</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">
                Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success</span>
            </h2>
            <p className="text-gray-600 mt-2 md:mt-4 max-w-xl mx-auto text-sm md:text-lg font-medium px-4">
              Un students ki kahaniyan jinhone apni coding skills transform ki aur tech careers start kiye.
            </p>
        </div>

        <ReviewsUI reviews={reviews} />

      </div>
    </section>
  );
}