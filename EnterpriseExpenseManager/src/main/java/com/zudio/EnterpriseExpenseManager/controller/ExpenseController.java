package com.zudio.EnterpriseExpenseManager.controller;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import com.zudio.EnterpriseExpenseManager.model.ExpenseStatus;
import com.zudio.EnterpriseExpenseManager.service.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("/add")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        Expense savedExpense = expenseService.saveExpense(expense);
        return ResponseEntity.ok(savedExpense);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Expense>> getUserExpenses(@PathVariable Long userId) {
        List<Expense> expenses = expenseService.getExpensesByUser(userId);
        return ResponseEntity.ok(expenses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Expense>> getExpenseById(@PathVariable Long id) {
        Optional<Expense> expense = expenseService.getExpenseById(id);
        return ResponseEntity.ok(expense);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Expense>> getExpensesByStatus(@PathVariable ExpenseStatus status) {
        List<Expense> expenses = expenseService.getExpensesByStatus(status);
        return ResponseEntity.ok(expenses);
    }

    @PutMapping("/approve/{id}")
    public ResponseEntity<Expense> approveExpense(@PathVariable Long id) {
        Expense approvedExpense = expenseService.approveExpense(id);
        return approvedExpense != null ? ResponseEntity.ok(approvedExpense) : ResponseEntity.notFound().build();
    }
}
