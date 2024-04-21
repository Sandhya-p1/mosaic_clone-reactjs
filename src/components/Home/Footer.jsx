import { AlertCircle, Circle, MoreHorizontal, Square } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-12  text-black gap-5">
      {/* BOX1 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6 xl:col-span-4">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX2 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6 xl:col-span-4">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $17,489
          <span className="font-medium text-base bg-orange-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX3 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6 xl:col-span-4">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX4 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <h2 className="text-lg font-semibold">Direct VS Indirect</h2>
        <hr />

        <div className="flex items-center gap-x-5 flex-wrap">
          <h1 className="text-3xl font-bold iconflex  ">
            <Circle className="text-blue-800 " size={16} />
            $24,780
            <span className=" text-base text-slate-500 font-normal">
              Direct
            </span>
          </h1>
          <h1 className="text-3xl font-bold iconflex  ">
            <Circle className="text-blue-800 " size={16} />
            $24,780
            <span className=" text-base text-slate-500 font-normal">
              InDirect
            </span>
          </h1>
        </div>
      </div>
      {/* BOX5 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <h2 className="text-lg font-semibold iconflex">
          Real Time Value
          <AlertCircle className="text-white fill-slate-400" size={20} />
        </h2>
        <hr />

        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX6 */}
      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-4">
        <h2 className="text-lg font-semibold">Top Countries</h2>
        <hr />
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <button className="box px-1 cursor-pointer rounded-sm iconflex">
            <Square className="text-blue-900 fill-blue-900" size={12} />
            United States
          </button>
          <button className="box px-1 cursor-pointer rounded-sm iconflex">
            <Square className="text-indigo-800 fill-indigo-900" size={12} />
            Italy
          </button>
          <button className="box px-1 cursor-pointer rounded-sm iconflex">
            <Square className="text-sky-700 fill-sky-700" size={12} />
            Others
          </button>
        </div>
      </div>
      {/* BOX7 */}

      <div
        className="box  
       col-span-12 lg:col-span-8"
      >
        <h2 className="text-lg font-semibold p-4">Top Channels</h2>
        <hr />
        {/* table */}
        <div className="relative overflow-x-auto no-scrollbar">
          <table className="m-2  w-full text-left rtl:text-right   ">
            <thead>
              <tr className="uppercase bg-slate-50  text-slate-400 text-sm font-medium">
                <th className=" px-5  py-2">source</th>
                <th className=" px-3  py-2">visitors</th>
                <th className=" px-3  py-2 ">revenues</th>
                <th className="px-3 py-2">sales</th>
                <th className="  py-2">conversion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-5 py-2 imgflex ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    className="profilebox"
                  />
                  Github.com
                </td>
                <td className=" px-5 py-2">2.4K</td>
                <td className="text-green-500 px-5 py-2">$3,877</td>
                <td className=" px-5 py-2">267</td>
                <td className="text-blue-500 px-5 py-2">4.7%</td>
              </tr>
              <tr>
                <td className=" px-5 py-2 imgflex ">
                  <img
                    src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png"
                    className="profilebox"
                  />
                  Twitter
                </td>
                <td className=" px-5 py-2">2.4K</td>
                <td className="text-green-500 px-5 py-2">$3,877</td>
                <td className=" px-5 py-2">267</td>
                <td className="text-blue-500 px-5 py-2">4.7%</td>
              </tr>
              <tr>
                <td className=" px-5 py-2 imgflex ">
                  <img
                    src="https://i.pinimg.com/736x/60/85/3e/60853e9ce4b881dd5eaaec0b253cdcea.jpg"
                    className="profilebox"
                  />
                  Google (organic)
                </td>
                <td className=" px-5 py-2">2.4K</td>
                <td className="text-green-500 px-5 py-2">$3,877</td>
                <td className=" px-5 py-2">267</td>
                <td className="text-blue-500 px-5 py-2">4.7%</td>
              </tr>
              <tr>
                <td className=" px-5 py-2 imgflex ">
                  <img
                    src="https://banner2.cleanpng.com/20180425/kbe/kisspng-vimeo-logo-social-media-computer-icons-vimeo-5ae0019fb95917.4583526415246299197592.jpg"
                    className="profilebox"
                  />
                  Vimeo.com
                </td>
                <td className=" px-5 py-2">2.4K</td>
                <td className="text-green-500 px-5 py-2">$3,877</td>
                <td className=" px-5 py-2">267</td>
                <td className="text-blue-500 px-5 py-2">4.7%</td>
              </tr>
              <tr>
                <td className=" px-5 py-2 imgflex ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerFBHO6YzGVLEBrh85soiyb3EOKTKeIzQa2Hbvr0UhAfh9ilN8q86knXYWSrHCQgRb_8&usqp=CAU"
                    className="profilebox"
                  />
                  Indiehackers.com
                </td>
                <td className=" px-5 py-2">2.4K</td>
                <td className="text-green-500 px-5 py-2">$3,877</td>
                <td className=" px-5 py-2">267</td>
                <td className="text-blue-500 px-5 py-2">4.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* BOX8*/}

      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <h2 className="text-lg font-semibold">Sales Over Time (all stores)</h2>
        <hr />
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-bold flex gap-x-1 items-start">
            $24,780
            <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
              +49%
            </span>
          </h1>
          <div className="imgflex">
            <p className="text-slate-400 iconflex">
              <Circle className="text-blue-700 h-3 w-3" />
              Current
            </p>
            <p className="text-slate-400 iconflex">
              <Circle className="text-blue-900 h-3 w-3" />
              Previous
            </p>
          </div>
        </div>
      </div>
      {/* BOX9*/}

      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX10*/}

      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
      {/* BOX11*/}

      <div className="box p-5 flex flex-col gap-y-2 col-span-12 lg:col-span-6">
        <div className="flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-tlYffNxlPVlorwgcam_vUHMp88zA-Tl_ZY6CIyolFvSd9Nc_PQO_npQbUgJ5IybJ40&usqp=CAU"
            className="h-10 w-10"
          />
          <MoreHorizontal />
        </div>
        <h1 className="font-semibold text-xl">Acme Plus</h1>
        <p className="uppercase text-slate-400 font-semibold text-sm">sales</p>
        <h1 className="text-3xl font-bold flex gap-x-1 items-start">
          $24,780
          <span className="font-medium text-base bg-green-500  text-white rounded-full px-1">
            +49%
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
