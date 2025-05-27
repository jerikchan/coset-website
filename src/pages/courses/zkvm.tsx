import React, { useState, useEffect } from "react"
import { PureHeader} from "../../components/site-header"
import { PureFooter} from "../../components/footer"
import { TailwindIndicator } from "../../components/tailwind-indicator"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"

export default function CourseZkvm() {
  const [activeSection, setActiveSection] = useState("episode-1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 处理滚动时自动更新活动章节
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="episode-"]');
      let currentActiveSection = 'episode-1';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭移动端菜单函数
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return(
    <div className="bg-web-paper text-gray-800 font-inter min-h-screen">
      <PureHeader navigationItems={coursesNavigationItems} />
      
      {/* 移动端菜单按钮 */}
      <div className="lg:hidden sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-3 px-4">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center space-x-2 text-gray-700 py-2 px-4 rounded-md border border-gray-200 w-full"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span>{episodeNames[parseInt(activeSection.split('-')[1]) - 1] || '课程目录'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${mobileMenuOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="mx-auto container gap-4 flex flex-col lg:flex-row justify-center px-4 flex-grow py-6 lg:py-10">
        {/* 移动端菜单覆盖层 - 全屏设计 */}
        <div 
          className={`fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMobileMenu}
        ></div>
        
        {/* 移动端全屏菜单 */}
        <div 
          id="mobile-menu"
          className={`fixed inset-x-0 top-0 z-40 lg:hidden bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out overflow-auto ${
            mobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
          style={{
            height: '100dvh',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">课程导航</h2>
            <button 
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={closeMobileMenu}
              aria-label="关闭菜单"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <ul className="space-y-2 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((episode, idx) => (
                <li 
                  key={`episode-${episode}`}
                  style={{
                    opacity: 0,
                    animation: mobileMenuOpen ? `slideDown 0.4s ease-out ${idx * 50}ms forwards` : 'none'
                  }}
                >
                  <a 
                    href={`#episode-${episode}`}
                    onClick={(e) => {
                      setActiveSection(`episode-${episode}`);
                      closeMobileMenu();
                    }}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === `episode-${episode}`
                        ? "bg-blue-100/70 text-blue-700 font-medium"
                        : "hover:bg-gray-100/70 text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className={`w-8 h-8 flex-shrink-0 rounded-full mr-3 flex items-center justify-center text-sm ${
                        activeSection === `episode-${episode}`
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}>{episode}</span>
                      <span className="font-medium">{episodeNames[episode - 1]}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 侧边栏 - 桌面端 */}
        <aside className="hidden lg:block w-80 shrink-0 pr-6 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
          <div className="rounded-lg shadow-sm border border-gray-200 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">课程导航</h2>
            <ul className="space-y-1 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((episode) => (
                <li key={`episode-${episode}`}>
                  <a 
                    href={`#episode-${episode}`}
                    onClick={() => setActiveSection(`episode-${episode}`)}
                    className={`block py-2.5 px-3 rounded-md transition-all duration-200 ${
                      activeSection === `episode-${episode}`
                        ? "bg-blue-100/70 text-blue-700 font-medium translate-x-1"
                        : "hover:bg-gray-100/70 text-gray-700 hover:text-blue-600 hover:translate-x-1"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className={`w-6 h-6 flex-shrink-0 rounded-full mr-2 flex items-center justify-center text-xs ${
                        activeSection === `episode-${episode}`
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}>{episode}</span>
                      <span className="line-clamp-1">{episodeNames[episode - 1]}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 space-y-10 lg:space-y-16 custom-scrollbar mt-4 lg:mt-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((episode, index) => (
            <section 
              id={`episode-${episode}`} 
              key={`episode-content-${episode}`}
              className="rounded-lg shadow-sm border border-gray-200 p-4 lg:p-8 bg-white/50 backdrop-blur-sm"
            >
              <div className="mb-4 lg:mb-6 flex justify-between items-start">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Episode {episode}: {episodeNames[episode - 1]}</h2>
                  <p className="text-sm text-gray-600">主讲人：{speakers[index]}</p>
                </div>
                <a 
                  href={`https://github.com/coset-io/zkp-academy/tree/main/ZKVM/lesson%20${episode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                  </svg>
                  Edit on GitHub
                </a>
              </div>
              
              <div className="aspect-video mb-4 lg:mb-6 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  className="w-full h-full" 
                  src={videoLinks[index]} 
                  title={`Episode ${episode}: ${episodeNames[episode - 1]}`} 
                  frameBorder="0" 
                  allowFullScreen>
                </iframe>
              </div>
              
              {slideLinks[index] && (
                <div className="mb-4">
                  <a 
                    href={slideLinks[index]} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors text-sm lg:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5 w-4 lg:w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    查看课件
                  </a>
                </div>
              )}
              
              {resourceLinks[index] && resourceLinks[index].length > 0 && (
                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-200">
                  <h3 className="text-base font-medium mb-3 lg:mb-4 text-gray-700">推荐资源</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                    {resourceLinks[index].map((resource, i) => (
                      <li key={`resource-${episode}-${i}`} className="flex">
                        <a 
                          className="flex-1 text-gray-700 hover:text-gray-900 p-2 lg:p-3 bg-gray-50/70 rounded-md border border-gray-200 text-xs lg:text-sm hover:bg-gray-100/70 transition-colors" 
                          href={resource.url} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
          
          {/* 课程作业模块 */}
          <div className="mt-16 mb-10 mx-auto rounded-lg p-6 lg:p-8 border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">课程作业</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* 作业1 */}
              <a 
                href="https://github.com/coset-io/zkp-academy/discussions/66"
                target="_blank"
                rel="noreferrer"
                className="group block p-6 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">1</span>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">第一周作业</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">zkVM 课程第一周作业</p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  GitHub Discussion
                </div>
              </a>

              {/* 作业2 */}
              <a 
                href="https://github.com/coset-io/zkp-academy/discussions/69"
                target="_blank"
                rel="noreferrer"
                className="group block p-6 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">2</span>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">第二周作业</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">zkVM 课程第二周作业</p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  GitHub Discussion
                </div>
              </a>

              {/* 作业3 */}
              <a 
                href="https://github.com/coset-io/zkp-academy/discussions/70"
                target="_blank"
                rel="noreferrer"
                className="group block p-6 rounded-lg border border-gray-200 bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200 hover:border-blue-200 md:col-span-2 lg:col-span-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">3</span>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">第三周作业</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">Add instruction in SP1</p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  GitHub Discussion
                </div>
              </a>
            </div>
          </div>

          {/* 赞助商展示区块 */}
          <div className="mt-16 mb-10 mx-auto rounded-lg p-6 lg:p-8 text-center border bg-white/50 backdrop-blur-sm border-gray-200 shadow-sm">
            <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-6">感谢本期课程赞助方</h2>
            <div className="flex justify-center">
              <img 
                src="/images/sponsors/zkm.png" 
                alt="ZKM Sponsor" 
                className="max-h-16 lg:max-h-20 object-contain"
              />
            </div>
          </div>

            {/* 底部讨论区块 */}
          <div className="mt-16 mb-10 mx-auto rounded-lg p-6 lg:p-8 text-center border-t border-gray-200">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Learn More / 了解更多信息</h2>
            <p className="text-gray-700 mb-3">
              New to here? Don't worry, we are welcome for your questions.<br />
              新来这里？别担心，我们欢迎您的提问。
            </p>
            <p className="text-gray-700 mb-6">
              If you find anything confusing, please give your feedback on Github Discussion!<br />
              如果您发现任何令人困惑的地方，请在 Github Discussion 上提供您的反馈！
            </p>
            <a 
              href="https://github.com/coset-io/zkp-academy/discussions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              Join the Discussion
            </a>
          </div>
        </main>
      </div>
      <PureFooter config={coursesFooterConfig} className="" />
      <TailwindIndicator />
      
      {/* 自定义滚动条样式 */}
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: rgba(243, 244, 246, 0.4);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(209, 213, 219, 0.6);
          border-radius: 8px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.7);
        }
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-10px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* 防止菜单过渡时文档滚动 */
        body.menu-open {
          overflow: hidden;
        }
        `}
      </style>
      
      {/* 控制移动端菜单打开时的body样式 */}
      {typeof document !== 'undefined' && (
        <script dangerouslySetInnerHTML={{
          __html: `
            document.body.className = ${mobileMenuOpen ? "'menu-open'" : "''"};
          `
        }} />
      )}
    </div>
  )
}

// 定义课程名称、讲师、视频链接和资源等常量数据
const episodeNames = [
  "zkVM 的历史和现状",
  "深入解析 Jolt",
  "zkwasm 介绍",
  "虚拟机简析",
  "电路设计与 prover",
  "电路设计与 prover（二）",
  "ZKM prover 详解",
  "实操讲解"
];

const speakers = [
  "wangyao",
  "Backdoor",
  "Sinka",
  "Johnxu",
  "Dream",
  "Dream",
  "Daniel",
  "Johnxu"
];

const videoLinks = [
  "https://www.youtube.com/embed/xoGte-TzHHk",
  "https://www.youtube.com/embed/lFUYsULyUNY",
  "https://www.youtube.com/embed/ZwibS4uGEj4",
  "https://www.youtube.com/embed/KxxeyKTksxs",
  "https://www.youtube.com/embed/avAIjRvgwqc",
  "https://www.youtube.com/embed/sALgu6tHEhs",
  "https://www.youtube.com/embed/KlhQns_8QII",
  "https://www.youtube.com/embed/rSNyOY1U7x0"
];

const slideLinks = [
  "https://github.com/Antalpha-Labs/zkp-academy/blob/main/ZKVM/lesson%201/zkvm-wangyao.pdf",
  "https://doutv.notion.site/Jolt-Lasso-for-Newbies-1591aee049b480b7a44ad7d00e3e9265?pvs=4",
  null,
  "https://github.com/coset-io/zkp-academy/blob/main/ZKVM/lesson%204/Introduce%20the%20zkVM.pdf",
  null,
  null,
  "https://github.com/coset-io/zkp-academy/blob/main/ZKVM/lesson%207/ZKM%20Prover%E5%9F%BA%E6%9C%AC%E6%9E%84%E9%80%A0%E8%AF%BE%E7%A8%8B.pptx",
  null
];

const resourceLinks = [
  [
    { title: "A guide to Zero Knowledge Proofs", url: "https://medium.com/@Luca_Franceschini/a-guide-to-zero-knowledge-proofs-f2ff9e5959a8" },
    { title: "The different types of ZK-EVMs", url: "https://vitalik.eth.limo/general/2022/08/04/zkevm.html" },
    { title: "Jolt", url: "https://eprint.iacr.org/2023/1217" }
  ],
  [
    { title: "Lasso + Jolt", url: "https://www.youtube.com/playlist?list=PLjQ9HCQMu_8xjOEM_vh5p26ODtr-mmGxO" },
    { title: "Binius", url: "https://vitalik.eth.limo/general/2024/04/29/binius.html" },
    { title: "JoltBook", url: "https://jolt.a16zcrypto.com/how/jolt.html" },
    { title: "Jolt R1CS", url: "https://x.com/samrags_/status/1820429579787423759?s=46" },
    { title: "Jolt 技术解析", url: "https://www.zksecurity.xyz/blog/posts/how-jolt-works/" }
  ],
  [],
  [
    { title: "Building a RISC-V simulator in Rust", url: "https://gregchadwick.co.uk/blog/building-rrs-pt1/" },
    { title: "SP1 zkVM 源码解析", url: "https://trapdoortech.medium.com/zero-knowledge-proof-introduction-to-sp1-zkvm-source-code-d26f88f90ce4" },
    { title: "Memory management in VM", url: "https://blog.tigris.fr/2019/07/28/writing-an-emulator-memory-management/" },
    { title: "RISC-V emulator in C", url: "https://fmash16.github.io/content/posts/riscv-emulator-in-c.html" }
  ],
  [],
  [],
  [],
  []
];