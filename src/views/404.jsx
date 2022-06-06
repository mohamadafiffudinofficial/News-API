import pageNotFoundIcon from '../assets/images/page-not-found.png';

const NotFound = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="space-y-5 flex flex-col items-center">
                <img src={pageNotFoundIcon} alt="page-not-found" className="w-40 h-40" />
                <p className="text-gray-200 text-2xl font-semibold">OOOPS....! Halaman yang ada cari tidak ada!</p>
            </div>
        </div>
    )
}

export default NotFound
