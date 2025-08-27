import { CourseData } from "../types/course"

export const latticeCourseData: CourseData = {
  title: "Lattice Course",
  description: "本课程以 Lattice-based SNARK 为主，从数学、PCS 及工程化三个部分展开，系统介绍格密码在 ZKP 中的原理、实现与前沿进展。",
  githubBaseUrl: "https://github.com/coset-io/zkp-academy/tree/main/lattice",
  discussionUrl: "https://github.com/coset-io/zkp-academy/discussions",
  parts: [
    {
      title: "",
      episodes: [
        {
          title: "Lattice Cryptography Overview & Why Lattice is the Future of PQ ZK Blockchain",
          speaker: "Kurt",
          videoLink: "https://www.youtube.com/embed/bhOPQe9UDxk",
          slideLink: "https://kurtpan666.github.io/KurtPan-Slides/2506-lattice-overview/Kurt%20Pan-Lattice-Overview-2506.pdf",
          resources: [
            { title: "Lattice Wiki", url: "https://wiki.lacom.io/" },
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1MCNjzdEaz/" }
          ]
        },
        {
          title: "Lattice是什么 & average-case and worst-case hard problems",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/wvCssFhn-rc",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/lattice/slides/Lattice-1.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV19cNCzuEG3/" },
            { title: "Lattice Based Cryptography for Beginners Ch1&2", url: "https://eprint.iacr.org/2015/938.pdf" }
          ]
        },
        {
          title: "第一周答疑",
          speaker: "",
          videoLink: "https://www.youtube.com/embed/xEXm5crprbI",
          resources: [],
        },
        {
          title: "Discrete Gaussians, Rejection Sampling, Rings and Modules",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/cMIiD4tmdVg",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/lattice/slides/Lattice-2.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1UMKLz9Eoo/" },
            { title: "Lattice Based Cryptography for Beginners Ch3", url: "https://eprint.iacr.org/2015/938.pdf" },
            { title: "The Mathematics of Lattice-Based Cryptography", url: "https://cryptography101.ca/lattice-based-cryptography/" },
            { title: "Module lattices reductions", url: "https://eprint.iacr.org/2012/090.pdf" }
          ]
        },
        {
          title: "Why NTT and how it works",
          speaker: "Bing",
          videoLink: "https://www.youtube.com/embed/94c3I3uXp6A",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/lattice/slides/NTT.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV18NKfz1E5Z/" },
            { title: "Multidigit Multiplication For Mathematicians", url: "https://cr.yp.to/papers/m3-20010811-retypeset-20220327.pdf" },
            { title: "Beginner Guide to NTT", url: "https://eprint.iacr.org/2024/585.pdf" },
            { title: "NTT and Applications Survey", url: "https://arxiv.org/pdf/2211.13546" }
          ]
        },
        {
          title: "Ajtai Commitment and Lyubashevsky Signature/Proofs",
          speaker: "Yingfei",
          videoLink: "https://www.youtube.com/embed/VSFvwAKYWq0",
          slideLink: "https://github.com/coset-io/zkp-academy/blob/main/lattice/slides/Lattice-3.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV11q3szWEw2/" },
            { title: "Basic Lattice Cryptography Ch5", url: "https://eprint.iacr.org/2024/1287.pdf" }
          ]
        },
        {
          title: "Building SNARKs",
          speaker: "高老师",
          videoLink: "https://www.youtube.com/embed/tS5f6UtJ8PQ",
          slideLink: "https://github.com/coset-io/zkp-academy/tree/main/lattice/slides/6.Building_SNARKs.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1hB3gz4Eur/" },
            { title: "How to Make SNARKs", url: "https://www.youtube.com/watch?v=KjkIQLJk4eQ" }
          ]
        },
        {
          title: "Realizing Polynomial Commitment Schemes",
          speaker: "高老师",
          videoLink: "https://www.youtube.com/embed/TP6jpY3uiao",
          slideLink: "https://github.com/coset-io/zkp-academy/tree/main/lattice/slides/7.Realizing_PCS.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1fzG4z9Ezw/" },
            { title: "MLE-PCS Final Report", url: "https://github.com/sec-bit/mle-pcs/blob/main/final-report.md" }
          ]
        },
        {
          title: "LaBRADOR",
          speaker: "高老师",
          videoLink: "https://www.youtube.com/embed/4JmlaYgUiw0",
          slideLink: "https://github.com/coset-io/zkp-academy/tree/main/lattice/slides/8.LaBRADOR.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1jWuTzpELX/" },
            { title: "LaBRADOR paper", url: "https://eprint.iacr.org/2022/1341.pdf" }
          ]
        },
        {
          title: "Greyhound",
          speaker: "高老师",
          videoLink: "https://www.youtube.com/embed/DWTp4MmSCc4",
          slideLink: "https://github.com/coset-io/zkp-academy/tree/main/lattice/slides/9.Greyhound.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1B5uxz3Et7/" },
            { title: "Greyhound paper", url: "https://eprint.iacr.org/2024/1293.pdf" }
          ]
        },
        {
          title: "Lattice ZKP Implementation: Lantern, Lattirust and Labrador & Greyhound PoC",
          speaker: "Kurt",
          videoLink: "https://www.youtube.com/embed/AOC01tsNf5k",
          slideLink: "https://wiki.lacom.io/wiki/cryptography/greyhound-poc",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1JNgTzbELK/" },
            { title: "Lantern/PoCs 集合", url: "https://lattice-zk.isec.tugraz.at/" },
            { title: "Lattirust", url: "https://github.com/lattirust/lattirust/" },
            { title: "LatticeFold", url: "https://github.com/NethermindEth/latticefold" },
            { title: "Fast Labrador Prover", url: "https://hackmd.io/@Ingonyama/fast-labrador-prover" }
          ]
        },
        {
          title: "格密碼分析初步",
          speaker: "Kurt",
          videoLink: "https://www.youtube.com/embed/i7vxP1B2MNo",
          slideLink: "https://wiki.lacom.io/wiki/cryptanysis/cryptanysis-sage-101/",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1PFbfz8EJd/" },
            { title: "fpylll", url: "https://wiki.lacom.io/wiki/fpylll" },
            { title: "A Gentle Tutorial for Lattice-Based Cryptanalysis", url: "https://eprint.iacr.org/2023/032" },
            { title: "Linear algebra and lattice reduction in Sage", url: "https://defeo.lu/sage-lattices-EJCIM/" },
            { title: "Cryptanalysis on Lattice-Based Cryptography", url: "https://hackmd.io/@Giapppp/BJ4wfpZST" },
            { title: "Using Lattices for Cryptanalysis", url: "https://simons.berkeley.edu/sites/default/files/docs/14975/cryptanalysis.pdf" },
            { title: "HNP with One Bit Oracle", url: "https://www.iacr.org/archive/crypto2009/56770333/56770333.pdf" },
            { title: "Sage for Lattice-based Cryptography", url: "https://www.maths.ox.ac.uk/system/files/attachments/sage-introduction.pdf" },
            { title: "Lattice Challenge", url: "https://www.latticechallenge.org/" },
            { title: "Lattice Estimator", url: "https://lattice-estimator.readthedocs.io/en/latest/" },
            { title: "The GGH Cryptosystem", url: "https://kel.bz/post/lattices/" },
            { title: "Building Lattice Reduction (LLL) Intuition", url: "https://kel.bz/post/lll/" },
            { title: "LLL algorithm (video)", url: "https://www.youtube.com/watch?v=vREqxm0j784" },
            { title: "COMPLEXITY OF LATTICE PROBLEMS Ch2", url: "" },
            { title: "Mathematics of Public Key Cryptography", url: "" }
          ]
        },
        {
          title: "加餐：A New Approach for LPN-based PRFs",
          speaker: "Youlong Ding",
          videoLink: "https://www.youtube.com/embed/vjKZzIu9X54",
          slideLink: "https://eprint.iacr.org/2025/898.pdf",
          resources: [
            { title: "Bilibili 视频", url: "https://www.bilibili.com/video/BV1kybmzfEeu/" }
          ]
        }
      ]
    }
  ],
  generalSupplementaryResources: [
    { title: "Lattice Wiki", url: "https://wiki.lacom.io/" },
    { title: "The Mathematics of Lattice-Based Cryptography", url: "https://cryptography101.ca/lattice-based-cryptography/" }
  ],
  sponsors: [
    {
      name: "KEF",
      logo: "/images/sponsors/KEF-LND-BLK.png",
      alt: "KEF Sponsor"
    }
  ]
}


