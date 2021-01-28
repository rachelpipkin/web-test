import { Controller, Get, Post, Patch } from '@overnightjs/core'
import { Request, Response } from 'express'
import moment from 'moment'

const inventoryList = []

const _buildInventory = block => {
  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'kk:mm'
  const dateTimeFormat = `${dateFormat} ${timeFormat}`
  const momentStart = moment(`${block.date} ${block.startTime}`, dateTimeFormat)
  const momentEnd = moment(`${block.date} ${block.endTime}`, dateTimeFormat)

  for (let start = momentStart.clone(); start.isBefore(momentEnd); start.add(15, 'minutes')) {
    const formattedInv = {
      date: block.date,
      startTime: moment(start).format(timeFormat),
      endTime: momentStart.add(15, 'minutes').format(timeFormat),
      booked: 0,
      total: parseInt(block.total),
    }

    inventoryList.push(formattedInv)
  }
}
const _findInventory = (date, time) => {
  let foundIndex = -1

  for (let i = 0; i < inventoryList.length; i++) {
    if (inventoryList[i].date == date && inventoryList[i].startTime == time) {
      foundIndex = i
    }
  }
  return foundIndex
}

@Controller('inventory')
export class InventoryController {
  @Get()
  private async get(req: Request, res: Response) {
    return res.status(200).send(inventoryList)
  }
  @Post()
  private add(req: Request, res: Response) {
    const block = req.body

    _buildInventory(block)

    return res.status(200).send(block)
  }
  @Patch()
  private patch(req: Request, res: Response) {
    let status = 422
    const { date, startTime } = req.body
    const inventoryIndex = _findInventory(date, startTime)

    if (inventoryIndex > -1) {
      const inv = inventoryList[inventoryIndex]

      if (inv.total > inv.booked) {
        inv.booked += 1
        status = 200
      }
    }

    return res.status(status).send(inventoryList)
  }
}
