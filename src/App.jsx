import MyDock from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Separator } from "@/components/ui/separator"

function App() {

  document.addEventListener("DOMContentLoaded", alert("Dont believe everything you see on this page. I am still developing!"));

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-950 w-full py-8 mb-12">
      <Header />

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h1 className="flex text-white text-2xl font-bold">About</h1>
        <p className="text-white my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus feugiat augue, quis auctor odio laoreet efficitur. Mauris placerat sed nisi at porta. Cras lobortis rhoncus erat, vel venenatis orci semper id. Fusce posuere posuere arcu sit amet dapibus. Curabitur malesuada suscipit elementum. Aliquam nibh est, efficitur sed nisi at, varius eleifend magna. Aliquam sit amet enim mauris. Morbi vitae rutrum arcu. Praesent finibus nec augue et luctus. Proin sagittis quam at tincidunt ornare. Maecenas in nibh ut turpis egestas ultricies. Donec condimentum hendrerit rutrum. Praesent dictum, turpis vitae bibendum elementum, lacus velit fermentum ipsum, ut suscipit magna ante hendrerit sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus nulla, dictum ac sem sit amet, lacinia congue diam. Curabitur ornare urna venenatis malesuada feugiat.
        </p>
      </section>

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h1 className="flex text-white text-2xl font-bold">Skills</h1>
        <Skills />

      </section>

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h1 className="flex text-white text-2xl font-bold mb-6">Work Experience</h1>
        <Work />

      </section>

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h1 className="flex text-white text-2xl font-bold">Education</h1>

      </section>

      <Separator className="w-4/5 max-w-[690px] bg-gray-800 my-5"></Separator>

      <section className="w-4/5 max-w-[690px]">
        <h1 className="flex text-white text-2xl font-bold">Projects</h1>

      </section>


      <MyDock />
    </div>
  )
}

export default App;
