import connectDB from "@/lib/db";
import Feature from "@/models/Feature";

async function getFeatures() {
  await connectDB();
  const features = await Feature.find({}).lean();
  return features;
}

export default async function Features() {
  const features = await getFeatures();

  return (
    <div className="bg-gray-50 py-12 sm:py-32 relative overflow-hidden">
      
      {/* Light Theme Background Decor */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      ></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-20">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-blue-50 border border-blue-200 mb-4 backdrop-blur-md">
             <span className="px-4 py-1 text-xs font-bold text-blue-600 uppercase tracking-widest">Why Choose Devsamp</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Web Development</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 mx-auto font-medium">
            Next.js, MongoDB aur modern JavaScript ke sath industry-ready full stack developer banein.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-5 snap-x sm:pb-0 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 no-scrollbar">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div 
                key={index} 
                className="min-w-[85vw] sm:min-w-0 snap-center group relative bg-white border border-gray-200 shadow-sm rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Light Theme Hover Animations */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div className="absolute inset-0 border border-transparent group-hover:border-blue-300 rounded-3xl transition-colors duration-500 z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                    <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-gradient-to-br from-transparent to-blue-50 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative mb-4 sm:mb-6 inline-block">
                       <div className="absolute inset-0 bg-blue-200 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                       <div className="relative flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-sm border border-blue-200 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <div dangerouslySetInnerHTML={{ __html: feature.iconSvg }} />
                       </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 group-hover:w-full z-20"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3 font-medium">No features found. Please run the seed script.</p>
          )}
        </div>
      </div>
    </div>
  );
}