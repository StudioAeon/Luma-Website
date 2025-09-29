export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Tailwind CSS Test
                </h1>
                <p className="text-gray-600 mb-6">
                    Testing various Tailwind utilities
                </p>

                {/* Button Group */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Primary
                    </button>
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                        Success
                    </button>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
                        Danger
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-pink-400 to-red-500 p-6 rounded-xl text-white">
                        <h3 className="font-semibold text-lg mb-2">Card 1</h3>
                        <p className="text-sm">Gradient background</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl text-white">
                        <h3 className="font-semibold text-lg mb-2">Card 2</h3>
                        <p className="text-sm">Responsive grid</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-xl text-white">
                        <h3 className="font-semibold text-lg mb-2">Card 3</h3>
                        <p className="text-sm">Rounded corners</p>
                    </div>
                </div>

                {/* Flexbox Test */}
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-6">
                    <span className="text-gray-700 font-medium">Flexbox Layout</span>
                    <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
            Badge
          </span>
                </div>

                {/* Spacing & Typography */}
                <div className="space-y-2">
                    <p className="text-xs text-gray-500">Extra small text</p>
                    <p className="text-sm text-gray-600">Small text</p>
                    <p className="text-base text-gray-700">Base text</p>
                    <p className="text-lg text-gray-800">Large text</p>
                    <p className="text-xl font-bold text-gray-900">Extra large bold text</p>
                </div>
            </div>
        </div>
    );
}