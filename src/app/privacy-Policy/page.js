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
          سياسة الخصوصية
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Typography variant="h5" sx={{ direction: "rtl" }}>
          مرحبًا بكم في "Just a Girl"! نحن ملتزمون بحماية خصوصيتكم وضمان أمان
          بياناتكم الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات
          التي تقدمها لنا.
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
                <Typography variant="h1">جمع المعلومات الشخصية</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  نقوم بجمع البيانات الشخصية التي تقدمها لنا عند استخدامك
                  لخدماتنا أو شراء منتجاتنا. قد تشمل هذه البيانات:
                </Typography>
                <Typography variant="h5">• الاسم الكامل.</Typography>
                <Typography variant="h5">• رقم الهاتف.</Typography>
                <Typography variant="h5">• عنوان البريد الإلكتروني.</Typography>
                <Typography variant="h5">• عنوان التوصيل.</Typography>
                <Typography variant="h5">
                  • معلومات الدفع (مثل أرقام البطاقات الائتمانية).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">استخدام المعلومات</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  نستخدم بياناتك الشخصية للأغراض التالية:
                </Typography>
                <Typography variant="h5">• تجهيز الطلبات وتوصيلها.</Typography>
                <Typography variant="h5">
                  • تحسين تجربتك مع منتجاتنا وخدماتنا.
                </Typography>
                <Typography variant="h5">
                  • إرسال العروض الترويجية والتحديثات.
                </Typography>
                <Typography variant="h5">
                  • التواصل معك للرد على استفساراتك أو حل المشكلات.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">مشاركة المعلومات</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  نحن لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات
                  التالية:
                </Typography>
                <Typography variant="h5">
                  • شركات الشحن لتوصيل الطلبات.
                </Typography>
                <Typography variant="h5">
                  • الجهات المصرح لها قانونًا إذا تطلب الأمر.
                </Typography>
                <Typography variant="h5">
                  • مزودي خدمات الدفع لمعالجة المعاملات.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">تخزين وأمان البيانات</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • نحن نستخدم تقنيات أمان حديثة لحماية بياناتك الشخصية من
                  الوصول غير المصرح به.
                </Typography>
                <Typography variant="h5">
                  • نحتفظ بمعلوماتك فقط طالما كانت ضرورية للأغراض المذكورة
                  أعلاه.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">حقوقك</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:
                </Typography>
                <Typography variant="h5">
                  • الوصول إلى بياناتك وتصحيحها إذا كانت غير دقيقة.
                </Typography>
                <Typography variant="h5">
                  • طلب حذف بياناتك إذا لم تعد هناك حاجة إليها.
                </Typography>
                <Typography variant="h5">
                  • الاعتراض على استخدام بياناتك في التسويق.
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
                  ملفات تعريف الارتباط (Cookies)
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • قد نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا.
                </Typography>
                <Typography variant="h5">
                  • يمكنك تعديل إعدادات المتصفح لتعطيل ملفات تعريف الارتباط إذا
                  رغبت.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{ bgcolor: "grey.0", borderRadius: 10, px: 3, boxShadow: 5 }}
            >
              <CardContent>
                <Typography variant="h1">تغييرات على سياسة الخصوصية</Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  • نحتفظ بالحق في تعديل سياسة الخصوصية من وقت لآخر. سيتم إعلامك
                  بأي تغييرات عبر البريد الإلكتروني أو من خلال الموقع.
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
              التواصل معنا
            </Typography>
            <Typography variant="h5" align="center">
              إذا كان لديك أي استفسارات حول سياسة الخصوصية، يُرجى التواصل معنا
              عبر:
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
