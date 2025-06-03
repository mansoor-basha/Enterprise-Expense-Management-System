package com.zudio.EnterpriseExpenseManager.utils;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import org.springframework.stereotype.Component;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

@Component
public class ExpenseReportExporter {

    public void exportToCSV(List<Expense> expenses, String filePath) throws IOException {
        FileWriter writer = new FileWriter(filePath);
        
        // Write CSV Header
        writer.append("ID,Description,Amount,Date,Status\n");

        // Write Expense Data
        for (Expense expense : expenses) {
            writer.append(expense.getId() + ",")
                    .append(expense.getDescription() + ",")
                    .append(expense.getAmount() + ",")
                    .append(expense.getDate() + ",")
                    .append(expense.getStatus().name() + "\n");
        }

        writer.flush();
        writer.close();
    }
}
