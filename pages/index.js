import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

<p>Tham gia 79club cùng với hàng triệu người chơi từ mọi nơi trên thế giới! Đắm mình vào thế giới sôi động, đặt cược và chiến thắng để chứng minh rằng bạn là người chiến thắng thực sự. Đầu tư và nâng cao cược của bạn, cải thiện kỹ năng, tích lũy kinh nghiệm và trở thành người chơi giỏi nhất từ trước đến nay!</p>
    
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
