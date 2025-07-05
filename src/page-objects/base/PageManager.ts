import { Page } from '@playwright/test';
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture';
import { BasePage } from './BasePage';

export class PageManager {
    get page(): Page {
        return pageFixture.page;
    }

    createBasePage(): BasePage {
        return new BasePage();
    }
}