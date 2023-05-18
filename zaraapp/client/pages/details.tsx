import React from 'react';
import Image from 'next/image';

const Details: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="head">MATERIALS, CARE AND ORIGIN</h2>
      </div>
      <div>
        <h2 className="head">MATERIALS</h2>
        <div>
          <p>
            We work with monitoring programmes to ensure compliance with safety, health, and quality standards for our products.
          </p>
          <p>
            The Green to Wear 2.0 standard aims to minimize the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee that production processes are clean and that our garments are safe and healthy.
          </p>
        </div>
        <div>
          <span>OUTER SHELL</span>
          <br />
          <span>65% cotton · 35% polyester</span>
          <br />
          <span>LINING</span>
          <br />
          <span>100% cotton</span>
          <br />
        </div>
      </div>
      <div>
        <h2 className="head">CARE</h2>
        <div>
          <p>Caring for your clothes is caring for the environment.</p>
          <p>
            To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.
          </p>
        </div>
        <h2 className="head">ORIGIN</h2>
        <div>
          <p>
            We work alongside our suppliers, workers, unions, and international bodies to develop a supply chain that respects and promotes human rights, contributing to the United Nations Sustainable Development Goals.
          </p>
          <p>
            Additionally, thanks to an ongoing collaboration with our suppliers, we have developed a tracking programme that allows us to determine where and how our products are being made.
          </p>
        </div>
      </div>
      <div>
        <h1>YOU MAY ALSO LIKE</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Details;
