package com.zudio.EnterpriseExpenseManager.service;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import com.zudio.EnterpriseExpenseManager.model.ExpenseStatus;
import com.zudio.EnterpriseExpenseManager.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public Expense saveExpense(Expense expense) {
        expense.setStatus(ExpenseStatus.PENDING);  // Default status on creation
        return expenseRepository.save(expense);
    }

    public List<Expense> getExpensesByUser(Long userId) {
        return expenseRepository.findByUserId(userId);
    }

    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    public List<Expense> getExpensesByStatus(ExpenseStatus status) {
        return expenseRepository.findByStatus(status);
    }

    public Expense approveExpense(Long id) {
        Optional<Expense> expenseOpt = expenseRepository.findById(id);
        if (expenseOpt.isPresent()) {
            Expense expense = expenseOpt.get();
            expense.setStatus(ExpenseStatus.APPROVED);
            return expenseRepository.save(expense);
        }
        return null;
    }
}
