import React from "react";
// mui
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// components
import Iconify from "@/components/Iconify";

function page() {
  return (
    <Container maxWidth="xl" sx={{ pt: 20, pb: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1" sx={{ fontSize: 50 }}>
          الشروط والأحكام
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Typography variant="h5" sx={{ direction: "rtl" }}>
          مرحبًا بكم في "Just a Girl"! إن استخدامك لخدماتنا أو شرائك لمنتجاتنا
          يعني موافقتك على الالتزام بالشروط والأحكام التالية.
        </Typography>
      </Box>
      <Divider sx={{ my: 3, bgcolor: "#939598" }} />
      <Box sx={{ direction: "rtl" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">معلومات عامة</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • "Just a Girl" هي شركة متخصصة في تقديم منتجات العناية بالبشرة
                  عالية الجودة.
                </Typography>
                <Typography variant="h5">
                  • باستخدامك هذا الموقع أو شراء منتجاتنا، فإنك تقر بأنك قرأت
                  وفهمت هذه الشروط والأحكام.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">سياسة الطلبات والدفع</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • يتم تأكيد الطلب بعد التواصل معنا عبر الهاتف أو الواتساب
                  وتأكيد التفاصيل.
                </Typography>
                <Typography variant="h5">
                  • الطلبات التي تتجاوز قيمتها 1000 جنيه مصري يجب دفع قيمتها
                  كاملة باستخدام الفيزا.
                </Typography>
                <Typography variant="h5">
                  • نحن نحتفظ بالحق في إلغاء أي طلب بسبب خطأ تقني أو عدم التزام
                  العميل بسياسة الدفع.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">سياسة الشحن والتوصيل</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • يتم شحن المنتجات خلال [عدد الأيام] من تأكيد الطلب.
                </Typography>
                <Typography variant="h5">
                  • تعتمد مدة التوصيل على موقع العميل، وسيتم تحديد ذلك أثناء
                  إتمام عملية الشراء.
                </Typography>
                <Typography variant="h5">
                  • "Just a Girl" ليست مسؤولة عن أي تأخير ناتج عن شركة الشحن.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">سياسة الاستبدال والاسترجاع</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • للحفاظ على صحة وسلامة العملاء، لا يمكن استرجاع أو استبدال أي
                  منتج تم فتحه أو استخدامه.
                </Typography>
                <Typography variant="h5">
                  • في حال استلام منتج تالف، يجب التواصل معنا في نفس يوم استلام
                  الطلب لتقديم حل مناسب.
                </Typography>
                <Typography variant="h5">
                  • يجب أن يكون المنتج المراد استرجاعه أو استبداله غير مستخدم
                  وفي حالته الأصلية مع التغليف.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">مسؤولية العملاء</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • يتحمل العميل مسؤولية قراءة وصف المنتج ومكوناته لضمان ملاءمته
                  لبشرته قبل الشراء.
                </Typography>
                <Typography variant="h5">
                  • "Just a Girl" غير مسؤولة عن أي حساسية جلدية ناتجة عن سوء
                  استخدام المنتج.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">الملكية الفكرية</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • جميع الحقوق المتعلقة بالصور والنصوص والتصاميم والعلامة
                  التجارية الخاصة بـ"Just a Girl" محفوظة.
                </Typography>
                <Typography variant="h5">
                  • لا يجوز نسخ أو إعادة استخدام أي جزء من المحتوى دون إذن خطي
                  مسبق.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">إخلاء المسؤولية</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • تقدم منتجات "Just a Girl" لأغراض التجميل والعناية بالبشرة
                  فقط، وليست علاجًا طبيًا.
                </Typography>
                <Typography variant="h5">
                  • لا تضمن الشركة تحقيق نتائج محددة لكل عميل حيث تختلف النتائج
                  حسب نوع البشرة والاستخدام.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">
                  التعديلات على الشروط والأحكام
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار
                  مسبق.
                </Typography>
                <Typography variant="h5">
                  • يُنصح بمراجعة هذه الصفحة دوريًا للحصول على أحدث إصدار من
                  الشروط.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            bgcolor: "grey.0",
            borderRadius: 10,
            px: 3,
            boxShadow: 5,
            direction: "rtl",
            mt: 3,
            display: "flex",
            justifyContent: "center",
            width: "fit-content",
          }}
        >
          <CardContent>
            <Typography variant="h1" align="center">
              التواصل والدعم
            </Typography>
            <Typography variant="h5" align="center">
              لأي استفسارات أو شكاوى، يُرجى التواصل معنا عبر:
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              gap={1}
              sx={{ mt: 2, display: "flex", justifyContent: "center" }}
            >
              <Iconify icon="ic:round-alternate-email" sx={{ fontSize: 25 }} />
              <Typography variant="subtitle1" align="center">
                justagirl@info.com
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              gap={1}
              sx={{ mt: 1, display: "flex", justifyContent: "center" }}
            >
              <Iconify
                icon="ion:phone-portrait-outline"
                sx={{ fontSize: 25 }}
              />
              <Typography variant="subtitle1" align="center">
                287623869786
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default page;
