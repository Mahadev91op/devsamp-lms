import connectDB from "@/lib/db";
import Course from "@/models/Course";
import Link from "next/link";

async function getCourses() {
  try {
    await connectDB();
    const courses = await Course.find({}).sort({ createdAt: -1 }).limit(4).lean();
    
    return courses.map((course) => ({
      ...course,
      _id: course._id.toString(),
      createdAt: course.createdAt ? course.createdAt.toString() : null,
      updatedAt: course.updatedAt ? course.updatedAt.toString() : null,
    }));
  } catch (error) {
    console.error("Courses Fetch Error:", error);
    return [];
  }
}

export default async function CoursesSection() {
  const courses = await getCourses();

  return (
    <section className="relative py-12 md:py-32 bg-white overflow-hidden" id="courses">
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-24 space-y-3 md:space-y-4">
            <div className="inline-block px-3 py-1 border border-blue-200 rounded-full bg-blue-50 backdrop-blur-md">
              <span className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">
                Our Curriculum
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900">
              Courses Designed for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future Developers</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
              JavaScript ke basics se lekar Next.js aur MongoDB ke production-ready apps banane tak sab kuch sikhiye.
            </p>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link 
              href={`/courses/${course._id}`}
              key={course._id}
              className="block group relative min-w-[280px] w-[85vw] md:w-auto flex-shrink-0 snap-center bg-white border border-gray-200 shadow-sm rounded-3xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              
              <div className={`h-2 w-full bg-gradient-to-r ${course.gradient || 'from-blue-600 to-indigo-500'}`}></div>

              <div className="p-6 md:p-8 space-y-4">
                
                <div className="flex justify-between items-start">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                     {course.category || "Web Dev"}
                   </span>
                   <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">
                     <span className="text-yellow-600 text-xs font-bold">★ {course.rating || "5.0"}</span>
                   </div>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                     {course.title}
                   </h3>
                   <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                     {course.description}
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                   <div className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     {course.duration || "Self-paced"}
                   </div>
                   <div className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                     {course.students || 0}+ Students
                   </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                   <div>
                     <span className="text-gray-500 text-xs">Starting at</span>
                     <p className="text-gray-900 font-bold text-lg">₹{course.price}</p>
                   </div>
                   <button className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                     Enroll
                   </button>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 md:mt-16 text-center">
            <Link href="/courses" className="group relative inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-white border border-gray-300 text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 shadow-sm transition-all text-sm md:text-base">
                <span>View All Courses</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>

      </div>
    </section>
  );
}