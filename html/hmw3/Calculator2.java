

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculator2")
public class Calculator2 extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		req.getRequestDispatcher("/WEB-INF/calculator2.jsp").forward(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String param1 = req.getParameter("val1");
		String param2 = req.getParameter("val2");
		String param3 = req.getParameter("val3");
		String param4 = req.getParameter("val4");

		if (param1 != null && !param1.isEmpty() && param2 != null && !param2.isEmpty()) {
			double sum = Double.parseDouble(param1) + Double.parseDouble(param2);
			
			req.setAttribute("val1", param1);
			req.setAttribute("val2", param2);
			req.setAttribute("sum", sum);
		}
		if (param3 != null && !param3.isEmpty() && param4 != null && !param4.isEmpty()) {
			double mult = Double.parseDouble(param3) * Double.parseDouble(param4);
			req.setAttribute("val3", param3);
			req.setAttribute("val4", param4);
			req.setAttribute("mult", mult);
		}
		
		req.getRequestDispatcher("/WEB-INF/calculator2.jsp").forward(req, resp);
	}
}
