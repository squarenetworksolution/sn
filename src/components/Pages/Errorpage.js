import React, { Fragement } from 'react'

const Errorpage = () => {
return (

<Fragement>

<div className="flex flex-col items-center justify-center h-screen text-center">
<h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
<p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
<a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">


Go to Home
</a>
</div>

</Fragement>
)
}

export default Errorpage

