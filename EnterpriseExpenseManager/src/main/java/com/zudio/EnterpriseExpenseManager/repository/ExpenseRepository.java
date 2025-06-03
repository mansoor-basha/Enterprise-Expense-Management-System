package com.zudio.EnterpriseExpenseManager.repository;

import com.zudio.EnterpriseExpenseManager.model.Expense;
import com.zudio.EnterpriseExpenseManager.model.ExpenseStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUserId(Long userId);
    List<Expense> findByStatus(ExpenseStatus status);
}
