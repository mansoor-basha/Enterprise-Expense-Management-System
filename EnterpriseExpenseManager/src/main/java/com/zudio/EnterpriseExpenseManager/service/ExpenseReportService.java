package com.zudio.EnterpriseExpenseManager.service;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import com.zudio.EnterpriseExpenseManager.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExpenseReportService {
    private final ExpenseRepository expenseRepository;

    public ExpenseReportService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public BigDecimal getTotalExpensesForMonth(Long userId, YearMonth month) {
        List<Expense> expenses = expenseRepository.findByUserId(userId);
        return expenses.stream()
                .filter(expense -> YearMonth.from(expense.getDate()).equals(month))
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    public List<Expense> getExpensesForDateRange(Long userId, LocalDate startDate, LocalDate endDate) {
        return expenseRepository.findByUserId(userId).stream()
                .filter(expense -> !expense.getDate().isBefore(startDate) && !expense.getDate().isAfter(endDate))
                .collect(Collectors.toList());
    }
}
