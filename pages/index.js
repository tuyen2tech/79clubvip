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
        <Header title="79CLUB" />
    <table> 
    <tr>
    <td>Logo</td>
     <td>
    <p>79CLUB</p>
    <p>Nhà cái hàng đầu châu Á</p>
    <p>Tải xuống miễn phí:</p>
    </td>
    </tr>
    <tr>
    <td><button name="button" type="button">iOS</button></td>
    <td><button name="button" type="button">Android</button></td>
    </tr>
    
    </table>
    <p className="description">HƯỚNG DẪN CÀI ĐẶT</p>

<p className="description">Tham gia 79club cùng với hàng triệu người chơi từ mọi nơi trên thế giới! Đắm mình vào thế giới sôi động, đặt cược và chiến thắng để chứng minh rằng bạn là người chiến thắng thực sự. Đầu tư và nâng cao cược của bạn, cải thiện kỹ năng, tích lũy kinh nghiệm và trở thành người chơi giỏi nhất từ trước đến nay!</p>
    
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
