package com.zudio.EnterpriseExpenseManager.utils;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Component;

import java.io.FileOutputStream;
import java.util.List;

@Component
public class ExpenseReportPDFGenerator {
    public void generatePDF(List<Expense> expenses, String filePath) throws Exception {
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream(filePath));

        document.open();
        document.add(new Paragraph("Expense Report"));
        document.add(new Paragraph("Generated on: " + java.time.LocalDate.now()));
        document.add(new Paragraph("\n"));

        PdfPTable table = new PdfPTable(5);
        table.addCell("ID");
        table.addCell("Description");
        table.addCell("Amount");
        table.addCell("Date");
        table.addCell("Status");

        for (Expense expense : expenses) {
            table.addCell(String.valueOf(expense.getId()));
            table.addCell(expense.getDescription());
            table.addCell(expense.getAmount().toString());
            table.addCell(expense.getDate().toString());
            table.addCell(expense.getStatus().name());
        }

        document.add(table);
        document.close();
    }
}
