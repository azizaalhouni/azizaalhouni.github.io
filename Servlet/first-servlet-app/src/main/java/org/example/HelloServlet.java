package org.example;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.applet.Applet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/simple")

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       //String supportEmail = getServletContext().getInitParameter("support-email");
        PrintWriter out  = resp.getWriter();
        out.print("<html><head><title>Test 2</title></head><body>");
        out.print("<form method='post'>");
        out.print("Name: ");
        out.print("<input type='text' name='userName'></br>");
        out.print("Email Address: ");
        out.print("<input type='text' name='email'></br></br>");
        out.print("Problem: ");
        out.print("<input type='text' name='problem'></br><br>");
        out.print("problem description: ");
        out.print("<textarea row='20' col='40'></textarea></br></br>");
        out.print("<input type='submit' value='Help'/>");
        out.print("<form>");
        out.print("</body></html>");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        String supportEmail = getServletContext().getInitParameter("support-email");

        out.print("<html><head><title>Test</title></head><body>");
       String userName =  req.getParameter("userName");
       String emailAddress = req.getParameter("email");

        resp.getWriter().print("<p>Thank you! "+ userName+" for contacting us.\n" +
                " You should receive reply from us with in 24 hrs in your email address"+
                emailAddress +".\n"+"Let us know in our support email "+supportEmail+
                ".\n"+
                " if you don’t receive reply within 24 hrs.\n Please be sure to attach your reference"+
    "support_ticket_id *******"+"in your email.");

        out.print("</body></html>");
    }
}
