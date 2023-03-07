import { items } from "../../public/Items.json";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function ResponsiveCarousel() {
  const { swiper } = items;
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <style jsx>{
        `#carouselExampleCaptions {
            background-color: var(--gray);
            height: 400px;
        }`
    }
    
    </style>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/logo.png" class="d-block w-100" alt="/logo.png"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/logo.png" class="d-block w-100" alt="/logo.png"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/logo.png" class="d-block w-100" alt="/logo.png"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  );
}