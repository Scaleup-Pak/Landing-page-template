export function FontTest() {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">🔤 Font Test Component</h2>
      
     


      {/* Test 2: Inline style with Nunito */}
      <div className="border-2 border-purple-500 p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">Test 2: Inline Style (Forced Nunito)</h3>
        <p style={{ fontFamily: 'Nunito, sans-serif' }} className="text-4xl font-bold">
          This MUST be Nunito via inline style
        </p>
      </div>

      {/* Test 2B: Tailwind font-sans with same styling */}
      <div className="border-2 border-green-500 p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">Test 2B: Tailwind font-sans (Same styling)</h3>
        <p className="font-sans text-4xl font-bold">
          This MUST be Nunito via inline style
        </p>
         <p className=" text-4xl font-bold">
          This MUST be Nunito via inline style
        </p>
      </div>

    
    </div>
  );
}
