export default function ConferenceDetails({isSchedule, testData}){
    return (
        <div className="bg-[#F9FAFB] p-0 sm:p-[50px]">
        {!isSchedule
          ? testData &&
            testData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#FFFFFF] p-[20px] mb-[20px] "
              >
                <img
                  alt="img"
                  className=" object-cover  h-[70px] w-[70px] sm:h-[130px] sm:w-[130px]  scrn-900:h-[150px] scrn-900:w-[150px] scrn-900:w-[150px] rounded-md "
                  src={item.image}
                />
                <div>
                  <h2 className="text-[#0A142F] font-bold">{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          : testData &&
            testData.map((item, index) => (
              <div key={index} className="bg-white p-[20px] mb-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#0A142F] font-bold mb-[10px] ">
                    {item.date}
                  </h2>
                  <p className="text-[#0A142F]">{item.day}</p>
                </div>
                {item.schedule.map((event) => (
                  <>
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] text-[#0A142F]">
                        Duration :{" "}
                      </p>
                      <p className="text-[14px] text-[#0A142F]">
                        {event.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-[5px] mb-5">
                      &nbsp;{" "}
                      <span className="h-[5px] w-[5px] rounded-full bg-black"></span>{" "}
                      <p className="text-[#0A142F]">{event.event}</p>
                    </div>
                  </>
                ))}
              </div>
            ))}
      </div>
    )
}