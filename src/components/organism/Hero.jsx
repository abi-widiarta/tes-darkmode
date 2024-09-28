export default function Hero() {
  return (
    <div className="flex gap-20 h-screen items-center">
      <div className="w-[60%]">
        <p className="text-4xl">
          🙏 <span className="bg-clip-text text-red-700 dark:text-transparent dark:bg-gradient-to-r dark:from-yellow-300 dark:via-yellow-100 dark:to-yellow-300 inline-block font-bold">Selamat Datang!</span>
        </p>
        <p className="dark:text-white/65 text-gray-950 text-lg leading-10 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sequi facilis dolor aspernatur exercitationem consectetur ex voluptatibus accusantium voluptatum tempora voluptas error quibusdam adipisci nulla nihil non eaque tenetur
          sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem assumenda nam obcaecati distinctio vitae? Modi veritatis aperiam animi vero repudiandae. quam consequuntur laudantium voluptates? Nam quae facilis,
          mollitia, ab iure, officia quis perspiciatis reprehenderit doloremque nostrum aperiam esse fugit eligendi!
        </p>
      </div>
      <div className="w-[40%] relative">
        <img className="w-96 h-96 object-cover rounded-lg z-20 relative" src="https://www.water-sport-bali.com/wp-content/uploads/2022/06/20-Tempat-Wisata-Untuk-Dikunjungi-Bali-Feature-Image.jpg" />
        <img className="w-96 h-96 top-6 left-6 object-cover blur-md rounded-lg absolute" src="https://www.water-sport-bali.com/wp-content/uploads/2022/06/20-Tempat-Wisata-Untuk-Dikunjungi-Bali-Feature-Image.jpg" />
      </div>
    </div>
  );
}
