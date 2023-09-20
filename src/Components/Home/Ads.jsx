import React from 'react';

const Ads = () => {
  const adHTML = `
    <div>
      <script type="text/javascript" style="position: relative;right:20px">
        atOptions = {
          'key' : '005d03e6a6c99cea1f25a3d5fe635f9b',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
        document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/005d03e6a6c99cea1f25a3d5fe635f9b/invoke.js"></scr' + 'ipt>');
      </script>
      <!-- ... Other script tags ... -->

      <div id="container-632808973f9f9d2e8f23d8e4751e2c93"></div>
    </div>
    <center>
      <h1 class='text-red'>تنبيه : يرجى ابلاغنا عن اي اعلانات مخلة للأداب</h1>
      <a href="https://discord.gg/mHSCxjQj" target="_blank">
        <button>ابلاغ</button>
      </a>
    </center>
  `;

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 flex justify-center items-center flex-col">
      <div className="p-[10px] m-[20px] rounded-lg shadow-lg w-[300px]">
        <h1>اعلانات الدعم</h1>
        <div dangerouslySetInnerHTML={{ __html: adHTML }} />
      </div>
    </div>
  );
};

export default Ads;
