import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { CompanyService } from '../services/company.service';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.companyService.getVacanciesByCompany(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}

