{
  type PageInfo = {
    title: string;
    test?: string;
  };
  type Page = "home" | "about" | "contact";

  // page를 key로 쓰고 PageInfo value를 값으로 쓸때..
  const nav: Record<Page, PageInfo>[] = [
    {
      home: { title: "Home", test: "123" },
      about: { title: "About", test: "123" },
      contact: { title: "Contact" },
    },
    {
      home: { title: "Home", test: "123" },
      about: { title: "About", test: "123" },
      contact: { title: "Contact" },
    },
  ];

  console.log(nav);
}
