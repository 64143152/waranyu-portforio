import { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="d-lg-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center " style={{ flex: 1 }}>
          <img
            src="/images/profile2.png"
            alt="Profile"
            style={{ width: '60%', objectFit: 'cover' }} 
          />
        </div>
        <div 
          className="text-center p-5" 
          style={{ flex: 1  }}
        >
          <TypingEffect />
        </div>
      </section>
      <section className="d-lg-flex justify-content-center align-items-center min-vh-100 text-black" style={{ backgroundColor: '#E5c690' }}>
        <div className=" p-5 "style={{ flex: 1 }}>
            <p className="p-lg-5">
              <h3>ก่อนอื่นผมขอแนะนำตัวก่อนเลยครับ</h3><br />
               สวัสดีครับ ผมนายวรัญญู ธรรมสอน หรือเรียกสั้นๆว่า K ก็ได้ครับ<br /> 
              มีความชอบในการศึกษาด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ ตลอดการศึกษาผมได้พัฒนาทักษะในด้านการเขียนโปแกรม 
              มีความพยายามเรียนรู้ทำความเข้าใจในด้านเทคโนโลยีและซอฟต์แวร์อยู่เสมอชอบลองสิ่งใหม่ๆ ไม่ว่าจะเป็นเครื่องมือ เทคนิค เพื่อพัฒนาตนเอง มีความอดทนและเรียนรู้ได้เร็ว ผมเชื่อว่าความรู้และทักษะที่ได้จากการเรียนรู้ที่ผ่านมาของผม
              จะสร้างคุณค่าและประโยชน์ต่อองค์กรของท่าน
            </p>
          </div>
          <div className="text-center " style={{ flex: 1 }}>
            <img
              src="/images/profile.png"
              alt="Profile"
              style={{ width: '50%', objectFit: 'cover' }} 
            />
          </div>
      </section>
    </>
  );
}

export default Home;

const TypingEffect = () => {
  const [text, setText] = useState("");
  const messages = ["Waranyu Thammason", "Web Developer", "UI/UX Designer"]; // อาร์เรย์เก็บข้อความ
  const typingSpeed = 150; 

  useEffect(() => {
    let messageIndex = 0; 
    let charIndex = -1; 

    const typeMessage = () => {
      const currentMessage = messages[messageIndex];
      setText((prev) => prev + currentMessage.charAt(charIndex)); 
      charIndex += 1;

      if (charIndex === currentMessage.length) {
        clearInterval(typingInterval); 
        setTimeout(() => {
          messageIndex = (messageIndex + 1) % messages.length; 
          setText(""); 
          charIndex = -1; 

          typingInterval = setInterval(typeMessage, typingSpeed); 
        }, 1000); 
      }
    };

    let typingInterval = setInterval(typeMessage, typingSpeed); 

    return () => clearInterval(typingInterval);
  }, []); 

  return <h1>{text}</h1>;
};
