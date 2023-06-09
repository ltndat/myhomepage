export default [
  {
    id: 'freelance',
    thumbnail: '/data/works/freelance/thumbnail.png',
    thumbnailHighContrast: true,
    en: {
      name: 'Freelance',
      desc: '',
      role: [],
      exp: [],
    },
    vi: {
      name: 'Kỹ sư tự do',
      desc: 'Khởi đầu sự nghiệp của một kỹ sư phát triển phần mềm bằng làm việc tự do, tôi đã tích lũy được những kinh nghiệm được cho là hữu dụng trên cả một kỹ sư phần mềm. Tôi đã học được các phương thức làm việc trên các hệ điều hành phổ biến, làm việc với thiết bị đầu cuối đến thực thi trên giao diện người dùng. Sáng tạo nội dung, thiết kế và chỉnh sửa các dạng hình ảnh video.',
      role: [
        {
          id: 'create',
          content: [
            {
              title: 'Nhà sáng tạo',
              desc: 'Tôi có vai trò sáng tạo nội dung từ yêu cầu, chủ đề đã chọn.',
            },
          ],
        },
        {
          id: 'design',
          content: [
            {
              title: 'Nhà thiết kế',
              desc: 'Tôi có vai trò lựa chọn, thiết kế và dựng nên các bản thiết kế từ  các bản nội dung.',
            },
          ],
        },
        {
          id: 'dev',
          content: [
            {
              title: 'Nhà phát triển giao diện',
              desc: 'Tôi có vai trò triển khai, xây dựng và duy trì dự án ứng dụng giao diện người dùng từ các bản thiết kế.',
            },
          ],
        },
        {
          id: 'back',
          content: [
            {
              title: 'Nhà phát triển phụ trợ',
              desc: 'Tôi có vai trò xây dựng hệ thống, xử lý dữ liệu, quản trị cơ sở dữ liệu và duy trì dự án phụ trợ.',
            },
          ],
        },
      ],
      exp: [
        {
          id: 'flow',
          heading: 'Quy trình',
          data: ['/data/works/freelance/flow-vi.svg'],
        },
        {
          id: 'develop',
          name: 'Phát triển',
          content: [
            {
              title: 'Sáng tạo',
              desc: 'Tôi đã kinh nghiệm làm thế nào để sáng tạo nội dung từ giải pháp cho một ý tưởng/vấn đề cụ thể.',
            },
            {
              title: 'Thiết kế',
              desc: 'Từ nội dung dựng nên các bản thiết kế đến thiết kế giao diện ứng dụng.',
            },
            {
              title: 'Code/Xây dựng',
              desc: 'Từ bản thiết kế xây dựng nên giao diện ứng dụng, từ nội dung xây dựng nên hệ thống phụ trợ và cơ sở dữ liệu.',
            },
            {
              title: 'Kiểm thử',
              desc: 'Kiểm thử bản đã xây dựng bằng cách phương pháp kiểm thử đơn vị (UT) và kiểm thử đầu cuối (E2E) để cho ra sản phẩm.',
            },
          ],
        },
        {
          id: 'product',
          name: 'Sản phẩm',
          content: [
            {
              title: 'Triển khai',
              desc: 'Đưa sản phẩm công khai bằng cách triển khai trên máy chủ/chợ ứng dụng.',
            },
            // {
            //   title: 'Vận hành',
            //   desc: 'Tôi đã học cách làm thế nào để triển khai một dự án ứng dụng phần mềm ngay từ đầu, từ các bản thiết kế và nội dung.',
            // },
            // {
            //   title: 'Duy trì',
            //   desc: 'Tôi đã học cách làm thế nào để triển khai một dự án ứng dụng phần mềm ngay từ đầu, từ các bản thiết kế và nội dung.',
            // },
          ],
        },
        {
          id: '',
          heading: 'Kỹ thuật',
        },
        {
          id: 'os',
          name: 'Hệ điều hành',
          content: [
            {
              title: 'Windows',
              desc: 'Kinh nghiệm làm việc với quy trình của windows.',
            },
            {
              title: 'MacOS',
              desc: 'Kinh nghiệm làm việc với quy trình của macos.',
            },
            {
              title: 'Linux/Wsl/ChromeOS',
              desc: 'Kinh nghiệm làm việc với quy trình của linux/bản phân phối linux.',
            },
          ],
        },
        {
          id: 'term',
          name: 'Thiết bị đầu cuối',
          content: [
            {
              title: '[Batch|Cmd]/Powershell',
              desc: 'Kinh nghiệm làm việc trực tiếp trên cửa sổ dòng lệnh của windows và các lệnh của windows.',
            },
            {
              title: 'Sh/Bash/Zsh/Fish',
              desc: 'Kinh nghiệm làm việc trực tiếp trên cửa sổ dòng lệnh của macos/linux và các lệnh của macos/linux.',
            },
          ],
        },
        {
          id: 'tech',
          name: 'Công nghệ',
          content: [
            {
              title: 'Git/Github',
              desc: 'Kinh nghiệm làm việc với các quy trình của git.',
              href: 'https://git-scm.com/',
            },
            {
              title: 'Javascript/Typescript/Eslint',
              desc: 'Kinh nghiệm làm việc với ngôn ngữ lập trình Javascript/Typescript.',
              href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
              title: 'Reactjs/Nextjs/Redux',
              desc: 'Kinh nghiệm làm với quy trình của React.',
              href: 'https://react.dev/',
            },
            {
              title: 'Chai/Mocha',
              desc: 'Kinh nghiệm làm việc với quy trình kiểm thử đơn vị (UT) của Javascript/Typescript.',
              href: 'https://mochajs.org/',
            },
            {
              title: 'Playwright',
              desc: 'Kinh nghiệm làm việc với quy trình kiểm thử đầu cuối (E2E) của Javascript/Typescript.',
              href: 'https://playwright.dev/',
            },
            {
              title: 'Mongodb',
              desc: 'Kinh nghiệm làm việc với mongodb hệ thống cơ sở dữ liệu tài liệu (document/nosql).',
              href: 'https://www.mongodb.com/',
            },
            {
              title: 'Mysql',
              desc: 'Kinh nghiệm làm việc với mysql hệ thống cơ sở dữ liệu truy vấn/bảng (table/sql).',
              href: 'https://www.mysql.com/',
            },
          ],
        },
      ],
    },
    // moment: [
    //   {
    //     title: '',
    //     thumbnail: '/data/works/freelance/thumbnail.png',
    //   },
    // ],
    article: [
      {
        title: '',
        thumbnail: '',
      },
    ],
  },
];
