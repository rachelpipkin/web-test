import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

const inventory = [
  {
    id: 1,
    date: '2021-01-28',
    startTime: '9:00am',
    endTime: '9:15am',
    booked: 2,
    total: 5,
  },
  {
    id: 2,
    date: '2021-01-28',
    startTime: '9:15am',
    endTime: '9:30am',
    booked: 5,
    total: 5,
  },
  {
    id: 3,
    date: '2021-01-29',
    startTime: '9:00am',
    endTime: '9:15am',
    booked: 0,
    total: 5,
  },
]

@Controller('inventory')
export class InventoryController {
  @Get('')
  private async get(req: Request, res: Response) {
    res.send(inventory)
    return res.sendStatus(200)
  }
}
