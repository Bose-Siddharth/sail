import React from "react";
import FactorySection from "../../Components/MonitorPage/FactorySection";

function MonitorData() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Monitor</p>

      <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-16">
        <FactorySection
          nameID="BOF"
          location="A-Block/S2"
          image="https://d12oja0ew7x0i8.cloudfront.net/images/news/ImageForNews_57209_16361199958445561.jpg"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-red-600 to-red-300 rounded-t"
        />
        <FactorySection
          nameID="Blast Furnance"
          location="C-Block/S12"
          image="https://assets.newatlas.com/dims4/default/e17c596/2147483647/strip/true/crop/3600x2400+0+0/resize/840x560!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F75%2F5e%2F3a377c2c49bf893597ddbeedf751%2Fdepositphotos-4358021-xl.jpg"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-red-600 to-red-300 rounded-t"
        />
        <FactorySection
          nameID="CCP"
          location="A-Block/S1"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7G_pxjLuFrY6CqK6RAGaf33MQQGCmFUCmQ&usqp=CAU"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-red-600 to-red-300 rounded-t"
        />
        <FactorySection
          nameID="Coke Oven"
          location="C-Block/S12"
          image="https://cruprod.blob.core.windows.net/media/a5hlf3n4/what-is-the-role-of-coke-oven-technology-under-decarbonisation-targets.jpg"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-orange-600 to-orange-300 rounded-t"
        />
        <FactorySection
          nameID="Section Mill"
          location="C-Block/S14"
          image="https://live.cdn.cms.sms-group.com/_processed_/a/5/csm_MediumSectionMill_HyundaiSteel_SMSgroup_N-SMS2634-010_e5adbda72a.jpg"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-orange-600 to-orange-300 rounded-t"
        />
        <FactorySection
          nameID="Sinter Plant"
          location="C-Block/S14"
          image="https://tiimg.tistatic.com/fp/1/003/860/sinter-plant-190.jpg"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t"
        />
        <FactorySection
          nameID="Merchant Mill"
          location="A-Block/S2"
          image="https://i0.wp.com/newsriveting.com/wp-content/uploads/2023/04/LIGHT-STRUCTURALS-ON-COOLING-BED-OF-MERCHANT-MILL-.jpg?resize=733%2C487&ssl=1"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t"
        />

        <FactorySection
          nameID="RMHP"
          location="A-Block/S2"
          image="https://www.elecon.com/views/templates/products/84348BUCKER__RECLAIMER.JPG"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-green-600 to-green-300 rounded-t"
        />
        <FactorySection
          nameID="Wheel & Axel"
          location="C-Block/S14"
          image="https://gumlet.assettype.com/swarajya%2F2023-01%2F9685f963-a9f0-4b86-9d83-6080e81f02bd%2Fmaxresdefault.jpg?q=75&auto=format%2Ccompress&w=400&dpr=2.6"
          TWclass="h-40 w-full min-height-40 bg-gradient-to-r from-green-600 to-green-300 rounded-t"
        />
        </div>
      </div>
  );
}

export default MonitorData;
