import loading from './assets/loading.PNG'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={loading} alt="loading..." width={180} className='text-center mx-auto animate-bounce' />
    </div>
  )
}

export default Spinner