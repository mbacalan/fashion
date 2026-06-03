export interface Service {
  slug: string;
  title: string;
  duration: string;
  price: string;
  details: string[];
  shopierUrl: string;
}

export const services: Service[] = [
  {
    slug: "online-styling-1saat",
    title: "Online Styling Seansı",
    duration: "1 saat",
    price: "2.000",
    shopierUrl: "https://www.shopier.com/whitepoplinshirt/46775847",
    details: [
      "Bu bir saatlik online styling seansında, gardırobunuzu detaylı bir şekilde birlikte analiz ediyoruz. Mevcut parçalarınızı kategorize edip, size en uygun şekilde nasıl kombinleyebileceğinizi değerlendiriyor, stilinize uygun kombinler oluşturuyor ve styling ile ilgili tüm sorularınızı yanıtlıyorum.",
      "Seans sırasında stilinizi güçlendirecek ancak gardırobunuzda eksik olan temel parçaları belirliyorum. Seansın ardından; size özel stil önerileri ve ihtiyaçlarınıza uygun satın alma linklerini içeren kişiselleştirilmiş bir e-posta paylaşıyorum.",
      "Bu hizmet; kişisel stilini netleştirmek, gardırobunu daha işlevsel hâle getirmek ve her gün ne giyeceğine kolayca karar verebilmek isteyen kişiler için ideal bir başlangıç seansıdır.",
    ],
  },
  {
    slug: "mini-styling-30dk",
    title: "Mini Online Styling Seansı",
    duration: "30dk",
    price: "1.250",
    shopierUrl: "https://www.shopier.com/whitepoplinshirt/46776082",
    details: [
      "Bu hizmet;",
      "- Belirli etkinliklere özel kombin yapmak isteyenler (davet, düğün, mezuniyet vb.)",
      "- Gardırobundaki bazı parçaları- sevdiği halde- nasıl kombinleyeceğini bilemeyenler (spesifik bir pantalon, renkli bir üst, tül veya işlemeli parçalar vb.)",
      "- Bir stil danışmanıyla çalışma deneyiminin tam olarak nasıl olduğunu öğrenmek isteyenler ve",
      "- Kişisel stilini oturtmuş ancak farklı kombinler oluşturma konusunda yeni bir bakış açısı arayanlar",
      "için, kısa ancak bilgilendirici bir seanstır.",
    ],
  },
  {
    slug: "gardirop-duzenleme",
    title: "Online Gardırop Temizliği ve Düzenleme Sistemi",
    duration: "1.5 saat",
    price: "2.500",
    shopierUrl: "https://www.shopier.com/whitepoplinshirt/46776368",
    details: [
      "Giyinmek, kombin yapmak ve gardırobunda vakit geçirmek keyifli olmalı; stresli değil. Ancak gardırobumuz kıyafetle dolup taştığında, çoğu zaman neye sahip olduğumuzu unutur; sürekli alışveriş yapmamıza rağmen “ne giyeceğim?” sorusuyla karşı karşıya kalırız. Bu döngü, zamanla stres ve kaygıya dönüşebilir.",
      "Whitepoplinshirt ile gerçekleştirdiğimiz bu 1,5 saatlik online gardırop temizleme ve düzenleme sistemi seansında, tüm gardırobunu birlikte ele alıyor ve yalnızca 5 adımlık etkili bir sistemle onu daha kullanışlı, daha sakin, daha organize ve en önemlisi giyinmenin yeniden keyifli olduğu bir alana dönüştürüyoruz.",
      "Seans sırasında; nasıl kombinleyeceğini bilmediğin ve dolabında uzun süredir atıl kalan parçaları da günlük hayatına tekrar kazandırıyoruz. Seansın ardından gardırobun, içinde vakit geçirmekten keyif alacağın ve rahatça kombin yapabileceğin yeni favori alanın hâline geliyor.",
      "Bu hizmet; kişisel stilini büyük ölçüde oturtmuş ancak kombin yaparken kendini tembel ya da ilhamsız hisseden, gardırobundaki kaosu nasıl düzene sokacağını bilemeyen ve özellikle mevsim geçişlerinde gardırobunu daha etkili bir sistemle yönetmek isteyenler için idealdir.",
    ],
  },
  {
    slug: "yuzyuze-styling",
    title: "Yüzyüze Styling & Alışveriş Danışmanlığı",
    duration: "Yarım Gün",
    price: "5.000",
    shopierUrl: "https://www.shopier.com/whitepoplinshirt/46776947",
    details: ["İçerik yakında eklenecektir."],
  },
];
